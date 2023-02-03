import { useParams } from 'react-router-dom';

export default function Category() {
    const { id } = useParams();

    return (
        <>
            <h4>Category {id}</h4>
        </>
    );
}
