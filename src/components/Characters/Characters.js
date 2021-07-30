import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./characters.css";

const Characters = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    const loadCharacter = async () => {
      const request = await axios.get(
        "https://api.sampleapis.com/futurama/characters"
      );
      console.log(request.data);
      setCharacter(request.data);
    };
    loadCharacter();
  }, []);

  return (
    <div className="container">
      <Typography className={"title"}>Futurama Characters</Typography>
      <div className="box">
        {characters.map((character) => {
          return character.name != null ? (
            <Card className={"root"}>
              {character.images != null ? (
                <CardMedia
                  className={"media"}
                  image={character.images.main.split("png")[0] + "png"}
                />
              ) : (
                <CardMedia
                  className={"media"}
                  image="https://media2.giphy.com/avatars/greggunn/DLaiwtfzrZi4.png"
                />
                
              )}

              <CardContent>
                <Typography className={"content"}>
                  {character.name.first} {character.name.middle}{" "}
                  {character.name.last}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};
export default Characters;
