import {useDispatch, useSelector} from "react-redux";
import UsersReducer from "../../Redux/reducers/UsersReducer";
import { changeInputAction, addUserAction, deleteUserAction } from "../../Redux/actions";


const UsersPage = () => {
    const {value, users} = useSelector(state => state.UsersReducer);


    const dispatch = useDispatch();


    const addUser = () => {
        dispatch(addUserAction(value))

    }
    const deleteUser = (id) => {
        dispatch(deleteUserAction())
    }

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }
    console.log(users)

    return(
        <div>
            <input type="text" placeholder="Name" onChange={changeInput} value={value}/>
            <button onClick={addUser} >add</button>
            <button onClick={deleteUser}>delete all</button>
            {users.map((user, index) => <p key={index}>{user}</p>)}
        </div>


    )
}

export default UsersPage;