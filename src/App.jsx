import './App.css'
import userData from './users.json'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

function App() {
  const [users, setUsers] = useState(() => {
    const ourUsers = localStorage.getItem('users')
    if (!ourUsers) return userData

    const parsedUsers = JSON.parse(ourUsers)
    return parsedUsers
  })

  const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
    }, [users])

  const handleChangeSearch = (e) => {
    setSearchValue(() => e.target.value)
  }

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  }

    const handleAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    setUsers((prevUsers) => [...prevUsers, finalUser]);
  };

 const handlefilteredUsers = users.filter(({name, number}) => {
      const normalizeFilter = searchValue.toLowerCase()
   return name.toLowerCase().includes(normalizeFilter)|| number.toLowerCase().includes(normalizeFilter);
  });
  
  return (
    <>
      <div>
      <h1>Phonebook</h1>
        <ContactForm handleAddUser={handleAddUser} />
        <SearchBox handleChangeSearch={handleChangeSearch} value={searchValue} />
        <ContactList handlefilteredUsers={handlefilteredUsers} handleDeleteUser={handleDeleteUser}/>
      </div>
    </>
  )
}

export default App