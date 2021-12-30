import React from "react";
import ClientService from "../services/ClientService";

class ClientComponent extends React.Component{

    constructor(){
        this.state = {
            clientes:[]
        }
    }

    componentDidMount(){
        ClientService.getClientes().then((response) => { 
            this.setState({clientes: response.data})
        });
    }

}

export default ClientComponent();