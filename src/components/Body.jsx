
import axios from "axios";
export default function Body(){
    let radioNum = null;

    const handleRadio = (e) => {
        radioNum=e.target.id;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = null;
        let regex = new RegExp('^\\d{5}$');
        
        if (radioNum === 'reg1'){
            let class_code = document.getElementById("text1").value;
            if(regex.test(class_code)){
                let classToEdit = {"unique_key": class_code};
                res = await axios.post('http://3.86.248.128:8000/add-class/', classToEdit);
                res = res.data;
                if(res['Success']){
                    window.alert(res['Success']);
                }else{
                    window.alert(res['Error']);
                }
                console.log("data returned: ", res);
                document.getElementById("text1").value = "";
            }else{
                window.alert("Course number error");
                document.getElementById("text1").value = "";
            }
        }
        if (radioNum === 'reg2'){
            let class_code = document.getElementById("text2").value;
            if(regex.test(class_code)){
                let classToEdit = {"unique_key": class_code};
                res = await axios.delete('http://3.86.248.128:8000/drop-class/', {data: classToEdit});
                if (res['data']['Success']){
                    window.alert(res['data']['Success'])
                }else{
                    window.alert(res['data']['Error'])
                }
                console.log("data returned: ", res);
                document.getElementById("text2").value = "";
            }else{
                window.alert("Course number error");
                document.getElementById("text2").value = "";
            }
        }
        if (radioNum === 'reg3'){
            let class_code = document.getElementById("text3").value;
            let classToEdit = {"unique_key": class_code};
            console.log("reg3")
            document.getElementById("text3").value = "";
        }

    }

    return(
        <div className="bod">
            <div className="bodyLinksContainer">
                <ul className="bodyUList">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Schedule Planner</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Slack</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">My Tuition Bill</a></li>
                </ul>
            </div>
            <div className="inputContainer">
                <table>
                    <tr>
                        <td>
                            <input type="radio" name="register" id="reg1" onChange={handleRadio}/>
                        </td>
                        <td>
                            <input type="text" id = "text1"/>
                        </td>
                        <td>
                            Add Class
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" name="register" id="reg2" onChange={handleRadio}/>
                        </td>
                        <td>
                            <input type="text" id = "text2"/>
                        </td>
                        <td>
                            Drop Class
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <input type="radio" name="register" id="reg3" onChange={handleRadio}/>
                        </td>
                        <td>
                            <input type="text" id = "text3"/>
                        </td>
                        <td>
                            Change P/F
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleSubmit}>
                                submit
                            </button>
                        </td>
                        <td>
                            <button>
                                estimate tuition
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}