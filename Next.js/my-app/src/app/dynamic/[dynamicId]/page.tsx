export default async function dynamicSub({
  params,
}: {
  params: Promise<{ dynamicId: string }>;
}) {
    const {dynamicId} =await params
  return <h1>Dynamic Sub is for the Id {dynamicId}</h1>;
}
