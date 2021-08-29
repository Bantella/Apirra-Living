import React from "react";
import Navbar from "../../src/components/Navbar";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Grow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Footer from "../../src/components/Footer";
import { Parallax } from "react-parallax";

const inlineStyle = {
  background: "rgba(255, 255, 255, 0.3)",
  borderRadius: "20px",
  left: "50%",
  top: "20%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
  fontSize: "450%",
};

const inlineStyle2 = {
  background: "rgba(255, 255, 255, 0.7)",
  borderRadius: "20px",
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
};

const useStyles = makeStyles({
  attentionGrabber: {
    color: `white`,
    position: `relative`,
    paddingBottom: `1rem`,
  },
  title: {
    color: `white`,
    marginBottom: `5vh`,
  },
  imgContainer: {
    marginBottom: 50,
  },
});

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar></Navbar>
      <Parallax bgImage="/laminate.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>Laminate</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>

      <h1></h1>
      <Parallax bgImage="/engineered.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>Engineered</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>

      <h1></h1>
      <Parallax bgImage="/carpet.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>Carpet</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>

      <h1></h1>
      <Parallax bgImage="/tile.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>Tile</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>
      <h1></h1>

      <Parallax bgImage="/vinyl.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>Vinyl</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>

      <h1></h1>
      <Parallax bgImage="/stone.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>Stone</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>

      <h1></h1>
      <Parallax bgImage="/pavers.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>Pavers</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>

      <h1></h1>
      <Parallax bgImage="/pvc-patio.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>PVC Patio</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}

export default App;
