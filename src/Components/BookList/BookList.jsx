import { Books } from "../../Consts/Books";
import { Book } from "./Book/Book";
import { Link } from "react-router-dom";
export const BookList = () => {
  return (
    <main className="flex p-5 items-center ">
        <section className="flex flex-col items-center justify-start w-4/5 gap-1 ">
          {Books.map((el) => {
            return (
              <Book
                price={el.price}
                availability={el.availability}
                title={el.title}
                image={el.image}
              />
            );
          })}
        </section>
      <Link to="/Cart" className="w-12 h-12 top-5 right-5 fixed">
        <img
          src="https://th.bing.com/th?id=OIP.N9_o8N5H3KGExKFO-qorPAHaHa&w=80&h=80&c=1&vt=10&bgcl=a75665&r=0&o=6&pid=5.1"
          alt=""
        />
      </Link>
    </main>
  );
};
