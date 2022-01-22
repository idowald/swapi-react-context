import { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';

export const useStarWars = () => useContext(StarWarsContext);
