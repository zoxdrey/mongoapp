function UserList(props) {
    return(
        <div className="users-list">
        
            {props.data.map(item => 
            {
                return (
                    <div className="user-lits__item">
                <p>{item._id}</p>
                <p>{item.name}</p>
                <p>{item.age}</p>
                </div>)
            })}
        </div>
    )
}

export default UserList;