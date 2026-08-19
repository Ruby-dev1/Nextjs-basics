import CategoryForm from "@/components/admin/form/category.form";

interface EditCategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditCategoryPage = async ({
  params,
}: EditCategoryPageProps) => {
  const { id } = await params;

  return (
    <main>
      <CategoryForm categoryId={id} />
    </main>
  );
};

export default EditCategoryPage;