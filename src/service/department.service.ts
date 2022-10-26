import axios from "axios";

class DepartmentService {

    baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/departments";
    }

    async getAll(cancelToken?: any) {
        return await axios.get(this.baseUrl, {cancelToken: cancelToken}).then(response => {
            return response.data
        });
    }

    async getOne(id: string) {
        return await axios.get(`${this.baseUrl}/${id}`).then(response => {
            return response.data
        });
    }
}

export const departmentService = new DepartmentService();