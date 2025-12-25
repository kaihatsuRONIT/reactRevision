import { useState } from "react";
import './css/text.css'
function User({cardStyle}) {
    
    return (
        <div>
            <div style={cardStyle}>
                <img style={{ width: "200px" }} src="https://imgs.search.brave.com/8qbq9LFdiErbLA2_1SW-p1ExwNsF7W4tZIzCeXvTbJc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/Ni8wNS9ibGluZGlu/Zy1za3VsbC1udW4t/d2l0aC1yYW5kb20t/Y29sb3JlZC12ZWN0/b3ItMzYwMTA2MDUu/anBn"
                    alt="photo.png"
                />
                <div style={{
                    padding: "5px"
                }}>
                    <h3 className="myheading">Ronit Khanna</h3>
                    <p className="mypara">Software Engineer</p>
                </div>
            </div>
        </div>
    )
}
export default User;