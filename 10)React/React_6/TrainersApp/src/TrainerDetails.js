import React from 'react';
import { useParams, Link } from 'react-router-dom';
import trainersData from './TrainersMock';

function TrainerDetail() {
    const { id } = useParams();
    const trainer = trainersData.find(t => t.TrainerId.toString() === id);

    if (!trainer) {
        return <div>Trainer not found.</div>;
    }

    return (
        <div>
            <h2>Trainer Details</h2>
            <p><strong>TrainerId:</strong> {trainer.TrainerId}</p>
            <p><strong>Name:</strong> {trainer.Name}</p>
            <p><strong>Email:</strong> {trainer.Email}</p>
            <p><strong>Phone:</strong> {trainer.Phone}</p>
            <p><strong>Technology:</strong> {trainer.Technology}</p>
            <p><strong>Skills:</strong> {trainer.Skills}</p>
            <br />
            <Link to="/trainers">Back to Trainers List</Link>
        </div>
    );
}

export default TrainerDetail;
