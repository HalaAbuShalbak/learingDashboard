export default async function dynamicSubReview({
    params,
  }: {
    params: Promise<{ dynamicId: string , reviewById: string }>;
  }) {
      const {reviewById , dynamicId} =await params
    return <h1>Review Id {reviewById} is for the product with id {dynamicId} </h1>;
  }
  