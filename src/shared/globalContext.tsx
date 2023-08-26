import {
  useState,
  createContext,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import { useNavigate } from 'react-router-dom'

import { lista } from './listaEstados'

type listaProps = {
  id: string;
  name?: string;
};

type nameProps = {
  first: string;
  last: string;
  title: string;
};

type timezoneProps = {
  offset: string;
  description: string;
};

type locationProps = {
  state: string;
  street: string;
  city: string;
  postcode: string;
  timezone: timezoneProps;
};

type pictureProps = {
  thumbnail: string;
  large: string;
};

export type userProps = {
  name: nameProps;
  location: locationProps;
  picture: pictureProps;
  email: string;
  cell: string;
};

export const initialProps = {
  name: {
    first: '',
    last: '',
    title: '',
  },
  location: {
    state: '',
    street: '',
    city: '',
    postcode: '',
    timezone: {
      offset: '',
      description: '',
    },
  },
  picture: {
    thumbnail: '',
    large: '',
  },
  email: '',
  cell: '',
}

type ContextValue = {
  setPage: Dispatch<SetStateAction<number>>;
  setData: Dispatch<SetStateAction<string>>;
  setNovaLista: Dispatch<SetStateAction<string[]>>;
  setSelected: Dispatch<SetStateAction<userProps[]>>;
  setFiltered: Dispatch<SetStateAction<userProps[]>>;
  setSearched: Dispatch<SetStateAction<userProps[]>>;
  setUserData: Dispatch<SetStateAction<userProps[]>>;
  setCustomer: Dispatch<SetStateAction<userProps>>;
  customer: userProps | undefined;
  selected: userProps[];
  userData: userProps[];
  filtrado?: userProps[];
  filtered: userProps[];
  searched: userProps[];
  handleChange: (name: string) => void;
  lista: listaProps[];
  novaLista: string[];
  adicionaEstado: (id: string) => void;
  page: number;
  data: string;
  getData: () => void;
};

type ContextProps = {
  children: ReactNode | ReactNode[];
};

const DataContext = createContext<ContextValue | null>(null)

export function ContextProvider({ children }: ContextProps): JSX.Element {
  const [novaLista, setNovaLista] = useState<string[]>([])
  const [userData, setUserData] = useState<userProps[]>([])
  const [selected, setSelected] = useState<userProps[]>([])
  const [filtered, setFiltered] = useState<userProps[]>([])
  const [searched, setSearched] = useState<userProps[]>([])
  const [customer, setCustomer] = useState<userProps>(initialProps)

  const [data, setData] = useState<string>('')
  const [page, setPage] = useState<number>(1)


  const navigate = useNavigate()

  const getData = async () => {
    const url = 'http://localhost:3001/results'
    await fetch(url)
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject(new Error('Request failed'))
      })
      .then((json) => {
        setUserData(json)
        setSearched(json)
      })
      .catch((error) => console.log('Servidor off', error.message))
  }
  useEffect(() => {
    getData()
  }, [])

  const removeEstado = (id: string) => {
    setNovaLista((i) => i.filter((item) => item !== id))
  }

  const adicionaEstado = (id: string) => {
    setNovaLista(novaLista.concat(id))
  }

  const handleChange = (id: string) => {
    setPage(1)
    const estado = novaLista.find((i) => i === id)
    if (!estado) {
      adicionaEstado(id)
    } else {
      removeEstado(id)
    }
  }

  // Cc = CaseCorrection
  const Cc = (name: string) => {
    const dontChange = ['da', 'das', 'do', 'dos', 'de']
    const valueAsArray = name.split(' ')

    const goodString = valueAsArray
      .map((word) => {
        return dontChange.includes(word.toLowerCase())
          ? word.toLowerCase()
          : fixCase(word)
      })
      .join(' ')

    function fixCase(word: string) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
    return goodString
  }

  const filtrado = userData
    .filter((user) => novaLista.includes(user.location.state))
    .map((user) => ({
      name: {
        first: Cc(user.name.first),
        last: Cc(user.name.last),
        title: Cc(user.name.title),
      },
      location: {
        state: Cc(user.location.state),
        street: Cc(user.location.street),
        city: Cc(user.location.city),
        postcode: user.location.postcode,
        timezone: {
          offset: user.location.timezone.offset,
          description: user.location.timezone.description,
        },
      },
      picture: {
        thumbnail: user.picture.thumbnail,
        large: user.picture.large,
      },
      email: user.email,
      cell: user.cell,
    }))

  useEffect(() => {
    setFiltered(filtrado)
  }, [novaLista])

  useEffect(() => {
    const a = userData.map((i) => i.location.state)
    setNovaLista(a)
  }, [userData])

  useEffect(() => {
    if (customer === initialProps) {
      navigate('/')
    }
  }, [customer, navigate])

  return (
    <DataContext.Provider
      value={{
        selected,
        setSelected,
        lista,
        novaLista,
        filtered,
        handleChange,
        userData,
        setUserData,
        adicionaEstado,
        page,
        setPage,
        data,
        setData,
        setFiltered,
        setNovaLista,
        customer,
        setCustomer,
        searched,
        setSearched,
        getData,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error(
      'You must wrap your app with <ContextProvider /> component',
    )
  }
  return context
}
