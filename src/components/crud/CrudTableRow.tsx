import { Caballero } from "./CrudAPP";

type CrudTableRowProps = {
  el: Caballero;
  setDataToEdit: React.Dispatch<React.SetStateAction<Caballero>>;
  deleteData: (id: string | number | null) => void;
};

export const CrudTableRow = ({
  el,
  setDataToEdit,
  deleteData,
}: CrudTableRowProps) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.constelation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(el.id)}>Eliminar</button>
      </td>
    </tr>
  );
};
