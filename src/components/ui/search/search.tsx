"use client";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Modal from "../modal";

import { useForm, FieldValues } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import Button from "../button";
import { useRouter } from "next/navigation";

const schema = Joi.object({
  search: Joi.string().required().min(2).label("Search"),
});

interface FormData {
  search: string;
}

const Search = () => {
  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  const router = useRouter();

  const onSubmit = ({ search }: FieldValues) => {
    router.push(`/search?search=${search}`);
    setOpen(false);
  };

  return (
    <div>
      <button
        className="capitalize flex items-center hover:text-primary transition-all duration-300"
        onClick={() => setOpen(true)}
      >
        <HiOutlineSearch className="text-xl mr-1" />
        search
      </button>
      <Modal onClose={() => setOpen(false)} open={open}>
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
            reset();
          })}
        >
          <div className="mb-4 mt-10">
            <input
              {...register("search")}
              id="search"
              type="text"
              className="px-6 py-2 text-black w-full border outline-0 rounded-2xl block focus:border-primary transition-all duration-500 ease-out"
              placeholder="Search ..."
              autoFocus
            />
            {errors.search && (
              <p className="text-primary">{errors.search.message}</p>
            )}
          </div>
          <Button rounded outline secondary>
            Search
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Search;
