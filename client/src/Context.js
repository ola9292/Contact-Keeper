import React,{useState} from "react"
const Context = React.createContext()

function ContextProvider({children}){
    const [contactList, setContactList] = useState([
        {
            id:1,
            name:"jill johnson",
            email:"jill@gmail.com",
            phone:"111-111-111-111",
            type:"personal"
        },
        {
            id:2,
            name:"fela durotoye",
            email:"felix@gmail.com",
            phone:"111-110-111-111",
            type:"personal"
        },
        {
            id:3,
            name:"jamil tunga",
            email:"jmil@gmail.com",
            phone:"111-111-000-111",
            type:"professional"
        }
    ],
    )
    const [current, setCurrent] = useState(null)
    const [filtered, setFiltered] = useState([])

    //add contact
   function addContact(contact){
    setContactList([...contactList, contact])
   }

   //delete contact
   function deleteContact(id){
        let newList =[];
       contactList.map((item)=>{
            if(id !== item.id){
                newList.push(item)
            }
            return newList
       })
       setContactList(newList)
   }

   //set current contact
   function setCurrentContact(contact){
        setCurrent(contact)
   }

   //clear current
   function clearCurrentContact(){
    setCurrent(null)
   }

   //update contact
   function updateContact(contact){
    let updatedArr = contactList.map((item)=>{
            if(item.id === contact.id){
                return contact
            }else{
                return item
            }
        })
        setContactList(updatedArr)
   }

   //filter function
   function filteredSearch(text){
     let filteredList = contactList.filter((item)=>{
       return item.name.toLowerCase().includes(text)
        })
   
    setFiltered(filteredList)

   }

   //clear filter
   function ClearFilter(){
    setFiltered([])
   }

   //Auth Context
   
    return(
        <Context.Provider value={{contactList,
                                filtered,
                                setContactList, 
                                addContact, 
                                deleteContact, 
                                current, 
                                setCurrent, 
                                setCurrentContact, 
                                clearCurrentContact, 
                                updateContact,
                                setFiltered,
                                filteredSearch
                                }}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}