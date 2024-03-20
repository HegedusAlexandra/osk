const Language = Object.freeze({
    EN: "en",
    HU: "hu",
    DE: "de"
  });

const Sort = Object.freeze({
    ASC: "asc",
    DESC: "desc",
    /* SALE: "sale",
    NEW: 'new' */
  });

const Sitemap = Object.freeze({
    HOME: "osk",
    PRODUCTS: "productlist",
    CART:'sum'
  });

const Filter = Object.freeze({
    FEMALE: "FEMALE",
    MALE: "MALE",
    CHILD: "CHILD"
});
  
  
export { Language,Sort,Filter,Sitemap };