import { useAuthState } from "../Context/AuthContext";
import AddTransaction from "./AddTransaction";
import UpdateTransaction from "./UpdateTransaction";

export default function CrudTransaction() {

    const { editing } = useAuthState();

    return editing ? <UpdateTransaction /> : <AddTransaction />

}
