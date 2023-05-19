import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto container p-5'>

            <div className='rounded-lg bg-white p-5'>
                <h2 className='text-center font-bold text-3xl my-3'>Blogs - Question and Answere</h2>

                <div>
                    <h2 className='text-xl my-1 text-primary'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>

                    <p> An access token and refresh token are commonly used in authentication systems, especially with technologies like JSON Web Tokens (JWT), to securely authenticate and authorize requests made by a client to a server.</p>

                    <b>Access Token:</b>
                    <p> An access token is a credential that is used to access protected resources on a server. It is typically short-lived and expires after a certain period of time. The access token contains information about the user or client, such as their identity or authorization claims, and is digitally signed to ensure its integrity.</p>

                    <b> Refresh Token:</b>
                    <p>        A refresh token is a long-lived credential that is used to obtain a new access token once the current access token expires. Unlike the access token, the refresh token is typically stored securely on the client-side, and it is not accessible to JavaScript code or other client-side technologies. The refresh token is used to request a new access token from the server without requiring the user to reauthenticate.</p>


                </div>

                <div className='mt-5'>
                    <h2 className='text-xl my-1 text-primary'> Compare SQL and NoSQL databases? </h2>
                    <p>
                        SQL and NoSQL are two different types of database management systems, each with its own characteristics and use cases. Here a comparison between SQL and NoSQL databases:
                    </p>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Stands for</th>
                                <td>Structured Query Language</td>
                                <td>Not Only SQL</td>
                            </tr>
                            <tr>
                                <th>Database Management System</th>
                                <td>Relational database management system (RDBMS)</td>
                                <td>Non-relational database management system</td>
                            </tr>
                            <tr>
                                <th>Suitable for</th>
                                <td>Structured data with a predefined schema</td>
                                <td>Unstructured and semi-structured data</td>
                            </tr>
                            <tr>
                                <th>Data Storage</th>
                                <td>Tables with columns and rows</td>
                                <td>Collections or documents</td>
                            </tr>
                            <tr>
                                <th>Transaction Management</th>
                                <td>Follows ACID properties</td>
                                <td>Does not necessarily follow ACID properties</td>
                            </tr>
                            <tr>
                                <th>Query Capabilities</th>
                                <td>Supports JOIN and complex queries</td>
                                <td>Does not support JOIN and complex queries</td>
                            </tr>
                            <tr>
                                <th>Data Structure</th>
                                <td>Normalized data structure</td>
                                <td>Denormalized data structure</td>
                            </tr>
                            <tr>
                                <th>Scalability</th>
                                <td>Requires vertical scaling</td>
                                <td>Horizontal scaling is possible</td>
                            </tr>
                            <tr>
                                <th>Examples</th>
                                <td>MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL Server</td>
                                <td>MongoDB, Cassandra, Couchbase, Amazon DynamoDB, Redis</td>
                            </tr>
                        </tbody>
                    </table>



                </div>

                <div>
                    <h2 className='text-xl my-1 text-primary'> What is express js? What is Nest JS </h2>
                    <b>Express.js:</b>
                    <p>

                        Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and unopinionated approach to building web applications, allowing developers to create APIs, web servers, and more. Express.js offers a lightweight set of features, enabling developers to add specific middleware and modules based on their application requirements. It provides routing, middleware support, and an ecosystem of extensions and libraries that can be integrated into the application. Express.js is known for its simplicity, speed, and versatility.
                    </p>
                    <b>Nest.js:
                    </b>
                    <p>Nest.js is a progressive, TypeScript-based framework for building scalable and maintainable server-side applications. It is built with a focus on modularity, testability, and extensibility. Nest.js follows the architectural style of Angular, providing a structured approach to developing Node.js applications. It uses decorators, modules, and dependency injection to organize and manage application components. Nest.js offers a powerful command-line interface (CLI) for project scaffolding and provides support for various features such as routing, middleware, authentication, data validation, and more. It is designed to be enterprise-ready and suitable for building large-scale applications.
                    </p>


                </div>

                <div>
                    <h2 className='text-xl my-1 text-primary'> What is MongoDB aggregate and how does it work ?? </h2>
                    <p>In MongoDB, the aggregate operation is a powerful method for processing and transforming data within a collection. It allows you to perform advanced data manipulations, such as filtering, grouping, sorting, joining, and computing aggregations across multiple documents.

                        The aggregate operation works by creating a pipeline of stages that are executed sequentially. Each stage in the pipeline performs a specific data processing operation, and the output of one stage becomes the input for the next stage. The pipeline stages can be chained together to build complex data transformations.</p>

                </div>
            </div>


        </div>
    );
};

export default Blogs;