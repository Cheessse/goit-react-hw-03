import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ handlefilteredUsers, handleDeleteUser }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(handlefilteredUsers) &&
          handlefilteredUsers.map((user) => {
            return (
              <Contact key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;