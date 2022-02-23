<template>
    <div>
        <section class="dummy-section">
            <div class="dummy-content">
                <h1 class="animate__animated animate__backInDown" style="margin-bottom: 10px;">Movie Search</h1>
                <button class="btn-fun shrink-border" @click.prevent="swalGetMovie()">Try it !</button>
            </div>
        </section>
        <section class="dummy-section">
            <div class="dummy-content row">
                <div class="column">
                    <h2>Button Gen</h2>
                    <div>
                        <button class="btn-gen btn-gen-1">btn-gen-1</button>
                        <button class="btn-gen btn-gen-2">btn-gen-2</button>
                        <button class="btn-gen btn-gen-3">btn-gen-3</button>
                        <button class="btn-gen btn-gen-4">btn-gen-4</button>
                        <button class="btn-gen btn-gen-5">btn-gen-5</button>
                        <button class="btn-gen btn-gen-6">btn-gen-6</button>
                        <button class="btn-gen btn-gen-7">btn-gen-7</button>
                    </div>
                </div>
                <div class="column">
                    <h2>Button Fun</h2>
                    <div class="">
                        <button class="btn-fun shrink-border">Ostentiferous</button>
                        <button class="btn-fun material-bubble">Xenization</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    data() {
        return {

        }
    },
    mounted() {
        
    },
    methods: {
        swalGetMovie() {
            swal({
                text: 'Search for a movie. e.g. "La La Land".',
                content: "input",
                button: {
                    text: "Search!",
                    closeModal: false,
                },
            })
            .then(name => {
                if (!name) throw null;
            
                return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
            })
            .then(results => {
                return results.json();
            })
            .then(json => {
                const movie = json.results[0];
                console.log('movies', json.results);

                if (!movie) {
                    return swal("Sorry mate...", "No movie was found!", "error");
                }
                
                const name = movie.trackName;
                const genreName = movie.primaryGenreName;
                const price = "$ " + movie.trackPrice;
                const imageURL = movie.artworkUrl100;
            
                swal({
                    className: "swal-movie",
                    title: "Top result:",
                    text: name + ".\n" + genreName + "\n" + price,
                    icon: imageURL,
                });
            })
            .catch(err => {
                if (err) {
                    swal("Oh noes!", "The AJAX request failed!", "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
        },
    }
}
</script>

<style>
.swal-movie .swal-text {
  background-color: #FEFAE3;
  padding: 17px;
  border: 1px solid #F0E1A1;
  display: block;
  margin: 22px;
  text-align: center;
  color: #61534e;
}
</style>