import { gameModel } from "../models/gameModel";
import { genereModel } from "../models/genereModel";
import { platformModel } from "../models/platformModel";
import { tagModel } from "../models/tagModel";
import {
  responseGame,
  responseGenere,
  responsePlatform,
  responseTag
} from "../services/dto/dtoGame";

export const buildGameModels = (gameListFromAPI: responseGame): gameModel[] => {
  const formatedGames: gameModel[] = [];
  const gameDetails = gameListFromAPI.results;

  gameDetails.forEach((game) => {
    formatedGames.push({
      name: game.name,
      image: game.background_image,
      platforms: buildPlatformModel(game.platforms),
      generes: buildGenereModel(game.genres),
      id: game.id,
      released: game.released,
      tags: buildTagModel(game.tags),
      rating: game.rating,
      playtime: game.playtime,
      metacritic: game.metacritic
    });
  });

  return formatedGames;
};

const buildPlatformModel = (platforms: responsePlatform[]): platformModel[] => {
  return platforms.map((platform) => {return {name: platform.platform.name}});
};

const buildTagModel = (tags: responseTag[]): tagModel[] => {
  return tags.map((tag) => {
    return { name: tag.name };
  });
};

const buildGenereModel = (generes: responseGenere[]): genereModel[] => {
  return generes.map((genere) => {
    return { name: genere.name };
  });
};
