import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import authSelectors from '../../redux/auth/auth-selectors';



export default function ContactView() {
   // const dispatch = useDispatch();
   
  // useEffect(() => {
  //     dispatch(getContacts());
  // }, [dispatch]);

   return (
      <div>
         <div>
            <h1> Phonebook </h1>
         </div>
         <ContactForm />
         <div>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
         </div>
    </div>
   
   );
 }
 