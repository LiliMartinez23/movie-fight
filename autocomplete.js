// Creating reusable widget
const createAutocomplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
    root.innerHTML = `
        <label><b> Search </b></label>
        <input class="input" />
        <div class="dropdown">
            <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
            </div>
        </div>
    `;

    const input = root.querySelector( 'input' );
    const dropdown = root.querySelector( '.dropdown' );
    const results = root.querySelector( '.results' );

    const onInput = async event => {
        const items = await fetchData(event.target.value);

        // Checking if a search was made
        if ( !items.length ) {
            // closing dropdown
            dropdown.classList.remove( 'is-active' );
            return;
        }
        results.innerHTML = '';

        // opening dropdown
        dropdown.classList.add( 'is-active' );

        for ( let item of items ) {
            // creating anchor tag
            const a = document.createElement( 'a' );

            // creating 'dropdown-item' class
            a.classList.add( 'dropdown-item' );
            a.innerHTML = renderOption( item );
            a.addEventListener( 'click', () => {
                // after selecting item close dropdown
                dropdown.classList.remove( 'is-active' );

                // updating value of input to selected item title
                input.value = inputValue( item );

                onOptionSelect( item );
            });

            // adding anchor tag to results dropdown menu
            results.appendChild( a );
        }
    };
    input.addEventListener( 'input', debounce(onInput) );

    // Checking if user clicked outside target window
    document.addEventListener( 'click', event => {
        if ( !root.contains( event.target ) ) {
            dropdown.classList.remove( 'is-active' );
        }
    });
};