function User() {
    const style = {
        width: "200px",
        border: "1px solid #828282",
        boxShadow: "2px 2px 3px 4px #dedede",
        margin:"10px"
    }
    return (
        <div style={{display:"flex"}}>
            <div style={style}>
                <img style={{ width: "200px" }} src="https://imgs.search.brave.com/8qbq9LFdiErbLA2_1SW-p1ExwNsF7W4tZIzCeXvTbJc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/Ni8wNS9ibGluZGlu/Zy1za3VsbC1udW4t/d2l0aC1yYW5kb20t/Y29sb3JlZC12ZWN0/b3ItMzYwMTA2MDUu/anBn"
                    alt="photo.png"
                />
                <div style={{
                    padding: "5px"
                }}>
                    <h3>Ronit Khanna</h3>
                    <p>Software Engineer</p>
                </div>
            </div>
        </div>
    )
}
export default User;