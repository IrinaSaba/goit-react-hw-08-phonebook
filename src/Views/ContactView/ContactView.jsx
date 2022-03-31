import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import s from './ContactView.module.css'




export default function ContactView() {
 
   return (
      <div>
         <div>
            <h1 className={s.userMenuTitle}> Phonebook </h1>
         </div>
         <ContactForm />
         <div>
            <h2 className={s.userMenuTitle}>Contacts</h2>
            <Filter />
            <ContactList />
         </div>
    </div>
   
   );
 }
 