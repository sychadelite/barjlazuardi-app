<template>
    <div class="dummy-content">
        <div>
            <h1 class="animate__animated animate__backInDown" style="margin-bottom: 10px;">Movie Search</h1>
            <button class="btn-gen-1" @click.prevent="swalGetMovie()">Try it !</button>
        </div>
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