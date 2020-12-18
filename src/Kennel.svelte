<script>
    import router from "page";
    import AnimalList from "./animals/AnimalList.svelte";
    import AnimalMiniList from "./animals/AnimalMiniList.svelte";
    import Animal from "./animals/Animal.svelte";

    // These are state variables, and the HTML will update reactively
    // No need for useState() or useEffect()
    let page = null;
    let params = null;

    router("/", () => (page = AnimalList));
    router(
        "/mini",
        (c, next) => {
            params = null;
            next();
        },
        () => (page = AnimalMiniList)
    );

    router(
        // URL pattern to match
        "/animal/:id",

        // Before we set the component
        (ctx, next) => {
            params = ctx.params;
            next();
        },

        // Set the component to display
        () => (page = Animal)
    );

    router(
        "*",
        (c, n) => {
            console.log(c);
            n();
        },
        () => (page = AnimalList)
    );
    router.start();
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

    nav {
        background-color: aliceblue;
        padding: 0.5rem;
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
    }

    li {
        padding: 0 5rem 0 0;
    }
</style>

<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/mini">Mini</a></li>
    </ul>
</nav>

<main>
    <h1>Nashville Kennels</h1>

    <div>
        <svelte:component this={page} {params} />
    </div>
</main>
