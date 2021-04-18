import http from "./UsersApi";

const create = data => {
  return http.post("/users", data);
};

const update = (id, data) => {
  return http.put(`/user/${id}`, data);
};

const remove = id => {
  return http.delete(`/user/${id}`);
};

const UsersService = {
    create,
    update,
    remove,
};

export default UsersService;