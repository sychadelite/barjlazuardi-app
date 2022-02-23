<template>
    <div>
        <nav class="strange-nav">
            <input class="toggle" type="checkbox" name="" id="nav">
            <label class="label" for="nav">
                <span class="hum"></span><span class="hum2"></span>
                <ul class="list">
                    <li class="list_home"><a href="#">Home</a></li>
                    <li class="list_about"><a href="#">About</a></li>
                    <li class="list_clients"><a href="#">Clients</a>
                        <ul class="list_clientsItems">
                            <li><a href="#">English</a></li>
                            <li><a href="#">Russia</a></li>
                            <li><a href="#">Germany</a></li>
                        </ul>
                    </li>
                    <li class="list_services"><a href="#">Services</a>
                        <ul class="list_servicesItems">
                            <li><a href="#">Diesel Engine</a></li>
                            <li><a href="#">Bunsen Burner</a></li>
                            <li><a href="#">Electron Microscope</a></li>
                        </ul>
                    </li>
                    <li class="list_contact"><a href="#">Contact</a></li>
                </ul>
            </label>
        </nav>
    </div>
</template>

<script>
export default {
    name: "StrangeFloatNav",
    setup() {
        
    },
}
</script>