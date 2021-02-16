<template>
    <!-- car shop section -->
    <div class="container-fluid py-3 pt-sm-5 py-md-5 bg-light-grey px-3 px-xl-5">
        <div class="row">
            <div class="col-24">
                <h2 class="mb-3 mb-sm-5">Every possible size, every possible choice, at the very best price</h2>
            </div>
        </div>
        <div class="row" id="topvehicles">
            <div v-for="(d, i) in topvehicles" class="col-sm-6 col-md-4 col-xl-3">
                <div :class="`card-shop wow animated fadeInUp delay-`+i">
                    <div class="card-shop-header">
                        <div class="">
                            <a class="w-100 d-block text-decoration-none" href="#">
                                <img alt="${d.make} ${d.model} ${d.derivative}" class="izmo-image lazyloaded"
                                    :src="getPublicCDN+d.imageUrl">
                            </a>
                        </div>
                        <div class="card-shop-title">
                            <h4 class="mb-2">{{d.make}}</h4>
                            <h5 class="mb-2">{{d.model}}</h5>
                            <p class="brief">{{d.derivative}}</p>
                        </div>
                    </div>
                    <div class="card-shop-body">
                        <div class="d-flex align-items-end justify-content-between mb-3">
                            <div class="w-100">
                                <ul>
                                    <li><span>{{d.personalDeal.term * 12}}</span> Months Lease</li>
                                    <li><span>{{d.personalDeal.mileage}}</span> Miles Per Annum</li>
                                    <li><span>{{formatMoney+d.personalDeal.initialRental}}</span> Initial Rental</li>
                                </ul>
                            </div>
                            <div class="price">
                                <p>{{formatMoney+d.personalDeal.monthlyPrice}}</p><small>Per Month Inc. VAT</small>
                            </div>
                        </div>
                        <a class="w-100 text-decoration-none btn btn-primary btn-lg btn-block" href="#">
                            View This Deal</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end car shop section -->
</template>

<script>
    export default {
        data: () => {
            return {
                topvehicles: []
            }
        },
        computed: {

        },
        methods: {
            getTopVehiclesAPI: async(callBack) =>{
                const res = await fetch(env.PUBLIC_MICROSERVICE_VEHICLE_URL + 'api/advertisevehicles/gettopvehicles?leasingDealType=2&take=4', env.fetchHeaders)
                const data = await res.json()
                callBack(data);
            }
        },
        mounted() {
            this.getTopVehiclesAPI(((res) => {
                this.topvehicles = res.data;
            }));
        }
    }
</script>

<style lang="scss" scoped>

</style>