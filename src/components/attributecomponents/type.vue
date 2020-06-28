  <template>
  <div class="form-group">
    <label for="name">功能：</label>
    <select class="form-control" v-model="$parent.currentcomponent.type">
      <option
        v-for="(type, index) in ['submit', 'reset']"
        :key="index"
        :value="type"
      >{{type}}</option>
    </select>
  </div>
</template>
