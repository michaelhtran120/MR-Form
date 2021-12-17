import React from "react";
import "./UserRecipes.css";
import { Button, Card, Container, Row, Image } from "react-bootstrap";
import { Recipe } from "../../redux/actions";
import { useNavigate } from "react-router";

type ComponentProp = {
    recipes: Recipe[];
};

const UserRecipes = ({ recipes }: ComponentProp) => {
    return (
        <div>
            <Container className='fluid'>
                <Row className='featured-row'>
                    {recipes.map((aRecipe: Recipe) => (
                        <RecipeCard title={aRecipe.name} url={aRecipe.imageUrl} description={aRecipe.description} key={aRecipe.id} data={aRecipe} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

type Prop = {
    title: string;
    url: string;
    description: string;
    data: Recipe;
};

const RecipeCard = ({ title, url, description, data }: Prop): JSX.Element => {
    const navigate = useNavigate();
    const handleClick = (data: Recipe) => {
        navigate(`/dashboard/${data.id}`, { state: data });
    };
    return (
        <Card className='recipe-card p-0'>
            <Image className='recipe-image' src={url} fluid />

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button
                    variant='primary'
                    onClick={() => {
                        handleClick(data);
                    }}
                >
                    See Details
                </Button>
            </Card.Body>
        </Card>
    );
};

export default UserRecipes;
