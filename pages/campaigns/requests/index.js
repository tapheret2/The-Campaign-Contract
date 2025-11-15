import React,{Component} from 'react'
import {Button} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from '../../../components/Layout';

class RequestIndex extends Component{
    render() {
        return (
            <Layout>
                <h3>Requests</h3>
                <Link>
                    <a>
                        <Button primary>Add Requests</Button>
                    </a>
                </Link>
            </Layout>>
        )
    }
}

export default RequestIndex;