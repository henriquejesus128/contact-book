import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { ModalContainer } from "../../styles/Container/style";
import CardContact from "../CardContact";
import { Ul } from "../ListUser/style";
import ModalEditContact from "../ModalEditContact";

const ListContact = () => {
  const { allContact } = useContext(ContactContext);
  const { modalEdit } = useContext(ContactContext);
  // user?.techs?.sort((a, b) => a.id < b.id ? 1 : a.id > b.id? -1 : 0);
  return (
    <Ul>
      {modalEdit && (
        <ModalContainer>
          <ModalEditContact />
        </ModalContainer>
      )}
      {allContact?.map((elem) => (
        <CardContact key={elem.id} elem={elem} />
      ))}
    </Ul>
  );
};

export default ListContact;
