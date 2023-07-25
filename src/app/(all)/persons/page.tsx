import apiClient, { AxiosError } from "@/api/api-client";
import PersonList from "@/components/person/person-list";

// https://api.themoviedb.org/3/trending/person/day
const getAll = async () => {
  try {
    const { data } = await apiClient.get("/trending/person/day");
    return data.results;
  } catch (error) {
    return (error as AxiosError).message;
  }
};

const PersonsPage = async () => {
  const persons = await getAll();

  return (
    <div>
      <PersonList persons={persons} />
    </div>
  );
};

export default PersonsPage;
