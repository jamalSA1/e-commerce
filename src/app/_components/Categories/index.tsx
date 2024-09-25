"use client";
import React, { useState } from "react"; // إضافة useState
import classes from "./index.module.scss";
import { Category } from "../../../payload/payload-types";
import { useFilter } from "../../_providers/Filter";
import { ListRestart, Loader, TimerReset } from "lucide-react";


export default function Categories({
  categories
}: {
  categories: Category[] | null;
}) {
  if (!categories) {
    console.error("Categories is null or undefined");
    return <p>لا توجد فئات متاحة</p>  
  }

  const { setCategoryFilters } = useFilter();
  const [loading, setLoading] = useState(false); // حالة التحميل

  const handleReset = () => {
    setLoading(true); 
    setCategoryFilters([]);
    setLoading(false); 
  };

  return (
    <section className={classes.section}>
      
      <button className={classes.resetBtn} onClick={handleReset}>
      {loading ? ( 
        <Loader />
      ) : (
        <>
          <ListRestart width={22} height={22} strokeWidth={1} />
          <span>اعادة تعيين</span>
        </>
      )}
      </button>

      <div  className={classes.container}>
      <div className={classes.list}>
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id} className={classes.card}>
              {typeof category.media === "string" ? (
                category.media
              ) : (
                <div>
                  <button onClick={() => setCategoryFilters([category.id])} className={classes.catName}>
                    {category.title}
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>لا توجد فئات متاحه</p>
        )}
      </div>
      </div>
    </section>
  );
}
