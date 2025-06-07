export default async function dynamicProductReviews({
    params,
  }: {
    params: Promise<{ dynamicId: string }>;
  }) {
      const {dynamicId} =await params
    return (
    <>
    <h1>Product {dynamicId} reviews:</h1>

    <ul>
    <li>review 1</li>
    <li>review 2</li>
    <li>review 3</li>
    </ul>
    
    </>
    );
  }
  