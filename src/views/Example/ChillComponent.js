import React from "react";
class ChillComponent extends React.Component {

    state = {
        name: '',
        showJobs: true
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleDelete = (job) => {
        //console.log("==> handle delete: ", job)
        this.props.deleteJob(job)
    }

    render() {

        // let name = this.props.name;
        // let age = this.props.age;

        let { names, age, arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div> <button onClick={() => this.handleShowHide(showJobs)}>Show</button> </div>
                    :
                    <>
                        <div className="jobs-list" >
                            Chill component name: {names} - {age}
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            id: {item.id} -
                                            titel: {item.titel} - salary: {item.salary} $
                                            <button
                                                onClick={() => this.handleDelete(item)}
                                                style={{ padding: '5px' }} > <i className='fas fa-trash-alt'></i></button>

                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div> <button onClick={() => this.handleShowHide(showJobs)}>Hide</button> </div>
                    </>
                }
            </>
        );
    }

}
export default ChillComponent;