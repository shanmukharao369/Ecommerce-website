import React from "react";
import { Navbar, Container, Table, Button } from "react-bootstrap";

const tours = [
  { date: "JUL16", city: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL17", city: "TORONTO,ON", venue: "BUDWEISER STAGE" },
  { date: "JUL18", city: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
  { date: "JUL19", city: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
  { date: "JUL20", city: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
  { date: "JUL21", city: "CONCORD, CA", venue: "CONCORD PAVILION" },
];

export const Home = () => {
  return (
    <div>
      <div>
        <Navbar className="text-white bg-secondary" expand="md">
          <Container className="d-block">
            <p className="display-5 text-center">Get Our Latest Album</p>
          </Container>
        </Navbar>
      </div>
      <div>
        <h3 className="text-center mt-4 mb-4" style={{ fontFamily: "serif" }}>
          TOURS
        </h3>
        <Table className="border d-flex align-items-center justify-content-center">
          <tbody>
            {tours.map((tour) => (
              <tr>
                <td>{tour.date}</td>
                <td>{tour.city}</td>
                <td>{tour.venue}</td>
                <td>
                  <Button className="bg-info text-white">BUY TICKET</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};


