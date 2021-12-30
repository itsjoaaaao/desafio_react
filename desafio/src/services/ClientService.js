import axios from 'axios';

const CLIENT_REST_API_URL = 'https://localhost8080/clientes';

class ClientService{
    getClientes(){
        axios.get(CLIENT_REST_API_URL);
    }
}

export default new ClientService();