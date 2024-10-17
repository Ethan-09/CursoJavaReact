import axios from 'axios';
const instance = axios.create({ baseURL: 'https://cursojavaspringb.onrender.com/people' });

export const savePersonName = async (obj) => await instance.post('/', obj)

export const getPersons = async () => await instance.get();

export const deletePerson = async (id) => await instance.delete('/' + id);

export const updatePerson = async (id, name, surname) => await instance.put('/'+id, { nombre: name ,  apellidos: surname });  
