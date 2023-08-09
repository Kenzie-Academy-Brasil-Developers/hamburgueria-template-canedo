import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage"
import "./styles/index.scss"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect, useState } from "react";

function App() {
  const localFavoriteList = localStorage.getItem("@FAVORITELIST");
  const [favoriteList, setFavoriteList] = useState(
    localFavoriteList ? JSON.parse(localFavoriteList) : []
  );
  
  const addFavorite = (addingfavorite) => {
    if (!favoriteList.some((favorite) => favorite.id === addingfavorite.id)) {
      setFavoriteList([...favoriteList, addingfavorite]);
      //Toast - função que dispara o toast
      toast.success("Favorito adicionado com sucesso.");
    } else {
      toast.error("Favorito já adicionado");
    }
  };

  const removeFavorite = (favoriteId) => {
    const newFavoriteList = favoriteList.filter(
      (favorite) => favorite.id !== favoriteId
    );
    setFavoriteList(newFavoriteList);
    toast.success("Favorito removido com sucesso com sucesso.");
  };

  return (
    <>
      <HomePage />
      <ToastContainer/>
    </>
  )
}

export default App
