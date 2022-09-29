import React from 'react';

const Block = () => {
    return (
        <div className='m-5'>
            <h1 className='fw-bold mt-4 ms-5 text-center mb-4'>My Block & <span className='text-danger'>Answer</span></h1>
            <div className="row row row-cols-1 row-cols-md-2 g-4 ">
                <div className="col-sm-6">
                    <div className="card shadow p-3 mb-5 bg-body rounded ">
                        <div className="card-body">
                            <h5 className="card-title">How does react work?</h5>
                            <p className="card-text">React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. <br />The declarative view makes your code more predictable and easier to debug.
                                A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab. </p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow p-3 mb-5 bg-body rounded ">
                        <div className="card-body">
                            <h5 className="card-title">What is the different between props and state?</h5>
                            <p className="card-text">Props: <br />Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties. <br />The Data is passed from one component to another. <br />It is Immutable (cannot be modified). <br />Props can be used with state and functional components. Props are read-only. <br />STATE: <br />The Data is passed within the component only. <br />It is Mutable ( can be modified). <br />State can be used only with the state components/class component (Before 16.0). State is both read and write.</p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow p-3 mb-5 bg-body rounded ">
                        <div className="card-body">
                            <h5 className="card-title">Different API field Name.</h5>
                            <p className="card-text">Description: <br />Fields display in a variety of places in the Salesforce user interface, including page layouts, related lists, search layouts, list views, and reports. Also, Salesforce provides programmatic access to your organization’s information using simple, powerful, and secure application programming interfaces using API. <br /> Field Label: <br />How the field is displayed in the user interface in areas such as record detail pages, search results, and list views. <br />  API Field Name: <br />The name of the field, as used programatically in Apex, or any of the APIs (Rest, SOAP, Bulk, etc). Most standard fields use the same name as the label while custom fields will show '__c' at the end for the API Name.
                            </p>

                        </div>
                    </div>
                </div>

            </div>

            <div>
                <hr className='mt-3 mb-3' />
                <p class="text-center text-gray fw-bold">Copyright@ 2021 My Activity</p>
            </div>

        </div>


    );
};

export default Block;