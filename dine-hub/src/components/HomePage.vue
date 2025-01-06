<template>
    <HeaderBlock />
    <h1>Hello {{ name }}, Welcome to the Home Page !!</h1>

    <!-- Container to center the table -->
    <div class="table-container">
        <table>
            <!-- Table Header -->
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>CAFÉ ID's</th>
                    <th>CAFÉ NAME</th>
                    <th>CONTACT</th>
                    <th>ADDRESS</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <!-- Table Body -->
            <tbody>
                <tr v-for="(item, index) in cafes" :key="item.id" :class="index % 2 === 0 ? 'even-row' : 'odd-row'">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.contact }}</td>
                    <td>{{ item.address }}</td>
                    <td>
                        <router-link :to="'/update/' + item.id">Update</router-link>
                        <button v-on:click="deleteCafes(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import HeaderBlock from './HeaderBlock.vue';
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            cafes: []
        };
    },
    components: {
        HeaderBlock
    },
    methods: {
        // Method to delete Cafe
        async deleteCafes(id) {
            let result = await axios.delete("http://localhost:3000/cafes/" + id);
            console.warn(result);
            if (result.status == 200) {
                this.loadData();
            }
        },
        // Method to load data
        async loadData() {
            let user = localStorage.getItem('user-info');

            if (!user) {
                this.$router.push({ name: 'SignUp' });
                return;
            }

            this.name = JSON.parse(user).name;

            let result = await axios.get("http://localhost:3000/cafes");
            console.warn(result);
            this.cafes = result.data;
        }
    },
    async mounted() {
        this.loadData();
    }
}

</script>

<style>
/* Centering the table container */
.table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 10px 20px;
    margin-top: 2px;
}

/* Table styling */
table {
    width: 80%;
    border-collapse: collapse;
    border: 8px double #000;
}

th,
td {
    border: 5px double #000;
    padding: 10px;
    text-align: center;
}

/* Header styling */
th {
    background-color: sandybrown;
    color: rgb(0, 0, 0);
    font-weight: bold;
}

/* Body cell text color */
td {
    color: black;
}

/* Alternating row colors */
.even-row {
    background-color: blanchedalmond;
}

.odd-row {
    background-color: lightgoldenrodyellow;
}

/* Table row hover effect */
tr:hover {
    background-color: lightgray;
}

/* Reduced space between heading and table */
h1 {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 0px;
    text-align: center;
}

/* Styling for buttons (Update and Delete) */
button,
a.router-link {
    display: inline-block;
    padding: 10px 20px;
    margin: 5px;
    font-size: 14px;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

/* Style for Update button */
button {
    background-color: #4CAF50;
    color: white;
    border: none;
}

/* Style for Delete button */
button.delete {
    background-color: #f44336;
    color: white;
    border: none;
}

/* Hover effect for both buttons */
button:hover,
a.router-link:hover {
    opacity: 0.8;
    transform: scale(1.1);
}

/* Adding specific styles for the Update and Delete buttons */
button.delete {
    background-color: #f44336;
    color: white;
}

button:hover {
    background-color: #45a049;
}

button.delete:hover {
    background-color: #d32f2f;
}

/* Styling router-link (Update link) */
a.router-link {
    background-color: #4CAF50;
    color: white;
    border: none;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
}

/* Update button specific hover effect */
a.router-link:hover {
    opacity: 0.8;
    transform: scale(1.1);
}
</style>
