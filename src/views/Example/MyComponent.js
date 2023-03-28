import React from "react";
import ChillComponent from "./ChillComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {

    state = {
        name: '',
        arrJobs: [
            { id: "1", titel: "reactjs", salary: "200" },
            { id: "2", titel: "Developes", salary: "300" },
            { id: "3", titel: "CaryGiaCat", salary: "400" }
        ]
    }

    addNewJob = (job) => {
        //console.log("==> shows job: ", job)
        this.setState(
            {
                arrJobs: [...this.state.arrJobs, job]
            }
        )
    }


    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    //delete 
    // truyền vào job để biết xóa cái job nào 
    //filter ham lọc, lọc ra một cái arr theo điều kiện     
    //
    //
    deleteJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        //lọc ra những phần tử có id khác với cái id job còn lại(lấy những phần tử chưa đc chọn)
        this.setState({
            arrJobs: currenJobs
        })

    }

    render() {
        return (
            <>
                <div>
                    <input type="text" value={this.state.name}
                        onChange={(event) => this.handleOnchangeName(event)} />
                </div>

                <div>
                    <p>day la demo onclick + {this.state['name']}</p>

                </div>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChillComponent
                    name={'one'}
                    age={"21"}
                    names={this.state['name']}

                    //lay ra form
                    //truyen xuong cho than con
                    arrJobs={this.state.arrJobs}

                    deleteJob={this.deleteJob}
                />
            </>

        );
    }

}
export default MyComponent;