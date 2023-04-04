const PostList = (props) => {
    return ( 
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry, index) => {
            return(
            <tr key={index}>
                <td>{entry.name} </td>
                <td>{entry.post} </td>
            </tr>
                )
            })}
            </tbody>
      </table>
     );
}
 
export default PostList;