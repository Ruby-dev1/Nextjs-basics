import BrandForm from "@/components/admin/form/brand.form";

interface EditBrandPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditBrandPage = async ({
  params,
}: EditBrandPageProps) => {
  const { id } = await params;

  return (
    <main>
      <BrandForm brandId={id} />
    </main>
  );
};

export default EditBrandPage;