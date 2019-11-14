import React, { Component } from 'react';
import Banner from '../Banner'
import { getPicture } from '../../action/getPicture';
import { connect } from 'react-redux';

class CreateArticle extends Component {
    constructor() {
        super();
        this.state = {
            file: null,
            title: "",
            content: "",
            category: "Select category"
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        // const formData = new FormData();
        // formData.append('file', this.state.file);
        // console.log(formData)
        console.log(this.state.file);
        const data = {
            image: this.state.file,
            // title: this.state.title,
            // content: this.state.content,
            // category: this.state.category
        }
        this.props.getPicture(data);


    }
    render() {
        return (
            <div>
                <Banner
                    backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
                    title="Write an article"
                ></Banner>
                {/* END Header */}
                {/* Main container */}
                <main className="main-content">
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-12">
                                    <form enctype="multipart/form-data" onSubmit={this.onSubmit} className="p-30 bg-gray rounded" method="POST" data-form="mailer">
                                        <div className="row">
                                            <div className="form-group col-md-12 my-5">
                                                <input onChange={(evt) => {
                                                    evt.preventDefault();
                                                    this.setState({
                                                        file: evt.target.files[0],
                                                    })
                                                }} type="file" className="form-control" />
                                            </div>
                                            <div className="form-group col-12 col-md-6">
                                                <input onChange={this.onChange} name='title' value={this.state.title} className="form-control form-control-lg" type="text" placeholder="Title" />
                                            </div>
                                            <div className="form-group col-12 col-md-6">
                                                <select onChange={this.onChange} name='category' value={this.state.category} id className="form-control form-control-lg">
                                                    <option value="Select category">Select category</option>
                                                    <option value='Vuejs'>Vuejs</option>
                                                    <option value='Reactjs'>Reactjs</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea onChange={this.onChange} name='content' value={this.state.content} className="form-control form-control-lg" rows={4} placeholder="Content" defaultValue={""} />
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-lg btn-primary" type="submit">Create Article</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
};

const mapStateToProps = () => ({})
export default connect(mapStateToProps, { getPicture })(CreateArticle)